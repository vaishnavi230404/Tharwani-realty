<?php
// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

// Get the POST data
$data = json_decode(file_get_contents("php://input"), true);

// Validate input
$phone = isset($data['phone']) ? strip_tags($data['phone']) : '';

if (!$phone) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Phone number is required"]);
    exit;
}

// Prepare email
$to = "pandeypratham1402@gmail.com";   // change to your email
$subject = "New Call Now Enquiry - Tharwani Realty Website";
$message = "A user has requested a call back.\n\nPhone: $phone\nTime: " . date("Y-m-d H:i:s");
$headers = "From: no-reply@yourdomain.com\r\n";
$headers .= "Reply-To: no-reply@yourdomain.com\r\n";

// Send email
$sent = mail($to, $subject, $message, $headers);

if ($sent) {
    echo json_encode(["success" => true, "message" => "Mail sent successfully"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to send mail"]);
}
?>
