resource "aws_security_group" "yososu_ec2_sg" {
  name        = "yososu_ec2_sg"
  description = "yososu map security groups"
  vpc_id      = "${data.aws_vpc.vpc.id}"

  ingress {
    description      = "My IP"
    from_port 	     = 0
    to_port          = 0
    protocol         = -1
    cidr_blocks      = ["59.11.88.196/32"]
  }

  ingress {
    description      = "Yososu Self"
    from_port 	     = 0
    to_port          = 0
    protocol         = -1
    self             = true
  }

  ingress {
    description      = "TLS from VPC"
    from_port        = 443
    to_port          = 443
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

  ingress {
    description      = "HTTP"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

  ingress {
    description      = "SSH"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
  }

  tags = {
    Name = "yososu_map_production"
  }
}