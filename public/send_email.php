<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Solo permitir solicitudes POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Método no permitido"]);
    exit;
}

// Obtener los datos del cuerpo de la solicitud
$input = file_get_contents("php://input");
$data = json_decode($input, true);

// 1. HONEYPOT: Si el campo oculto está relleno, es un bot
if (!empty($data["website_url"])) {
    // Simulamos éxito para no dar pistas al bot, pero no enviamos nada
    echo json_encode(["success" => true, "message" => "Spam detectado"]);
    exit;
}

// 2. VALIDACIÓN Y SANITIZACIÓN
$name = filter_var($data["name"] ?? "", FILTER_SANITIZE_STRING);
$email = filter_var($data["email"] ?? "", FILTER_SANITIZE_EMAIL);
$phone = filter_var($data["phone"] ?? "", FILTER_SANITIZE_STRING);
$service = filter_var($data["service"] ?? "", FILTER_SANITIZE_STRING);
$message = filter_var($data["message"] ?? "", FILTER_SANITIZE_STRING);

if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(["success" => false, "message" => "Faltan campos obligatorios"]);
    exit;
}

// 3. CONFIGURACIÓN DEL CORREO
$to = "multiservicios@solucionesvivivan.es";
$subject = "Nueva solicitud de presupuesto: " . $service;

$email_content = "Has recibido un nuevo mensaje desde la web:\n\n";
$email_content .= "Nombre: $name\n";
$email_content .= "Email: $email\n";
$email_content .= "Teléfono: $phone\n";
$email_content .= "Servicio: $service\n\n";
$email_content .= "Mensaje:\n$message\n";

$headers = "From: web@solucionesvivivan.es\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// 4. ENVÍO
if (mail($to, $subject, $email_content, $headers)) {
    echo json_encode(["success" => true, "message" => "Correo enviado correctamente"]);
} else {
    echo json_encode(["success" => false, "message" => "Error al enviar el correo. Por favor, revisa la configuración del servidor."]);
}
?>
