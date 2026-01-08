<?php
declare(strict_types=1);

header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');

const RECIPIENT_EMAIL = 'milanjohnso09@gmail.com';
const MIN_SUBMISSION_MS = 3000;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method Not Allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (json_last_error() !== JSON_ERROR_NONE || !is_array($data)) {
    $data = $_POST ?? [];
}

$required = ['name', 'email', 'service', 'message'];
$missing = [];

foreach ($required as $field) {
    if (!isset($data[$field]) || trim((string) $data[$field]) === '') {
        $missing[] = $field;
    }
}

if (!empty($missing)) {
    http_response_code(422);
    echo json_encode([
        'message' => 'Please complete all required fields.',
        'missing' => $missing,
    ]);
    exit;
}

$senderEmail = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
if ($senderEmail === false) {
    http_response_code(422);
    echo json_encode(['message' => 'Please enter a valid email address.']);
    exit;
}

function clean(string $value): string
{
    return trim(filter_var($value, FILTER_SANITIZE_SPECIAL_CHARS));
}

$timeSpentMs = isset($data['timeSpentMs']) ? (int) $data['timeSpentMs'] : 0;

$payload = [
    'name' => clean($data['name']),
    'email' => $senderEmail,
    'phone' => isset($data['phone']) ? clean($data['phone']) : '',
    'company' => isset($data['company']) ? clean($data['company']) : '',
    'service' => clean($data['service']),
    'message' => clean($data['message']),
    'companyWebsite' => isset($data['companyWebsite']) ? clean($data['companyWebsite']) : '',
];

// Honeypot field should stay empty
if ($payload['companyWebsite'] !== '') {
    http_response_code(204);
    exit;
}

if ($timeSpentMs > 0 && $timeSpentMs < MIN_SUBMISSION_MS) {
    http_response_code(429);
    echo json_encode(['message' => 'Please wait a moment before submitting.']);
    exit;
}

$subject = 'New Contact Form Lead - ' . $payload['service'];
$bodyLines = [
    "You have a new inquiry from your portfolio website.",
    "",
    "Name: {$payload['name']}",
    "Email: {$payload['email']}",
    "Phone: {$payload['phone']}",
    "Company: {$payload['company']}",
    "Service: {$payload['service']}",
    "",
    "Message:",
    $payload['message'],
    "",
    '----',
    'Sent from the Webbuild Systems portfolio contact form.',
];
$body = implode("\r\n", $bodyLines);

$headers = [
    'From' => 'Portfolio Website <no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'portfolio.local') . '>',
    'Reply-To' => "{$payload['name']} <{$payload['email']}>",
    'X-Mailer' => 'PHP/' . phpversion(),
];

$formattedHeaders = '';
foreach ($headers as $key => $value) {
    $formattedHeaders .= $key . ': ' . $value . "\r\n";
}

$mailResult = @mail(RECIPIENT_EMAIL, $subject, $body, $formattedHeaders);

if (!$mailResult) {
    http_response_code(500);
    echo json_encode(['message' => 'Unable to send your message right now. Please try again later.']);
    exit;
}

// Send confirmation email to the sender (best-effort)
$confirmationSubject = 'Thanks for reaching out to Webbuild Systems';
$confirmationBody = <<<EOT
Hi {$payload['name']},

Thanks for contacting Webbuild Systems. I’ve received your message about "{$payload['service']}" and will get back to you shortly.

If you need immediate assistance, reply to this email or call +256744806676.

Best regards,
Mwebesa Johnson
EOT;
$confirmationHeaders = 'From: Webbuild Systems <no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'portfolio.local') . ">\r\n";
@mail($payload['email'], $confirmationSubject, $confirmationBody, $confirmationHeaders);

echo json_encode(['message' => 'Message sent successfully!']);

