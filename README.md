# CloudResume

This is the front end and back end code for my resume hosted on AWS cloud. The front end code is stored in an S3 bucket which hosts the website. The custom DNS domain name of the website "https://www.douglasgarza-resume.com" has been registered using Route 53. A cloudfront distribution utilizes AWS Edge Locations for low latency connections across the globe. It also improves the security of the website by using "https".

The bottom of the resume page shows a visitor counter. The javascript portion of the code fetches an API created with API Gateway. The API fetch triggers an AWS Lambda function that contains the back end Java code. This Lambda function pulls the current visitor count stored in a key-value pair DynamoDB database. The Lambda function then increments the visitor counter by 1, stores the new count back into DynamoDB, and sends the new count up to the API where it can be accessed by the Javascript portion of the front end code. This updated visitor count is then displayed on the resume.

