<?php
// Allow cross-origin requests (optional if same origin)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

// Get the POST data
$data = json_decode(file_get_contents("php://input"), true);

// Validate input
$name = isset($data['name']) ? strip_tags($data['name']) : '';
$phone = isset($data['phone']) ? strip_tags($data['phone']) : '';

if (!$name || !$phone) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Missing fields"]);
    exit;
}

// Prepare email
$to = "pandeypratham1402@gmail.com"; 
$subject = "New Enquiry from Mohan Precious Greens Website";
$message = "Name: $name\nPhone: $phone\n";
$headers = "From: no-reply@yourdomain.com";

// Send email
$sent = mail($to, $subject, $message, $headers);

if ($sent) {
    echo json_encode(["success" => true, "message" => "Mail sent"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to send mail"]);
}
?>
