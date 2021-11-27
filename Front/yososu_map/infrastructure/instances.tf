resource "aws_instance" "yososu_production" {
    ami                         = "${var.ami}"
    instance_type               = "${var.instance_type}"
    key_name                    = "${var.key_name}"
    count                       = "${var.num}"
    associate_public_ip_address = true
    availability_zone           = "ap-northeast-2a"
    vpc_security_group_ids      = ["${aws_security_group.yososu_ec2_sg.id}"]
}

//load balancer
//resource "aws_lb_target_group_attachment" "geoip_attachement" {
  //count            = length(aws_spot_instance_request.instances)
  //target_group_arn = aws_lb_target_group.geoip_lb_target_group.arn
  //target_id        = aws_spot_instance_request.instances[count.index].spot_instance_id
  //port             = "${var.geoip_port}"
//}
