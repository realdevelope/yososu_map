variable "region" {
  description = "사용할 리전 현재는 서울리전"
  default     = "ap-northeast-2"
}

variable "vpc_cidr_block" {
  default = "172.31.0.0/16"
}

variable "my_ip" {
  description = "자신의 아이피"
  default = " 59.11.88.196/32"
}

variable "use_default" {
  default = true
}

variable "ami" {
  description = "AMI 이미지 현재는 우분투 20.04"
  default     = "ami-04876f29fd3a5e8ba"
}

variable "num" {
  description = "인스턴스 생성 갯수"
  default     = 1
}

variable "availability_zone" {
  default     = "ap-northeast-2a"
}

variable "instance_type" {
  description = "인스턴스 타입 현재는 t3a.small"
  default     = "t3a.small"
}

variable "root_volume_size" {
  description = "Specify the root volume size"
  default     = "30"
}

variable "root_volume_type" {
  description = "Specify the root volume type. Masters MUST have at least gp2"
  default     = "gp3"
}

variable "extra_volumes" {
  description = "Extra volumes for each instance"
  default     = []
}

variable "security_group_ids" {
  description = "Firewall IDs to use for these instances"
  type        = list
  default     = ["sg-07a2c68872e0cfc9f"]
}

variable "iam_instance_profile" {
  description = "iam 이름"
  default     = "Daeyoung"
}

// TODO: Maybe use a list instead and provision keys through cloudinit
variable "key_name" {
  description = "아마존 aws instance pem 키 이름"
  default = "pratice-for-infra"
}
