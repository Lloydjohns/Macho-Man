import smtplib
from email.mime.text import MIMEText

# Gmail credentials
gmail_user = 'jhonlloydborres021email@gmail.com'
gmail_password = 'Kimikazukithe2'

# Create the message
msg = MIMEText('Hello! This is a test email from localhost.')
msg['Subject'] = 'Test Email'
msg['From'] = gmail_user
msg['To'] = 'recipient_email@gmail.com'

# Connect to Gmail SMTP server
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()  # Secure the connection
server.login(gmail_user, gmail_password)
server.send_message(msg)
server.quit()

print("Email sent!")
