window.onload = function () {
    var tegname = /^1[3|4|5|7|8|9]\d{9}$/;
    var tegpws = /^\w{8,20}$/;
    var name = document.querySelector('.ophone');
    var pws = document.querySelector('.pws');
    var pws2 = document.querySelector('.pws2');
    var yj1 = document.querySelector('.yj1');
    var yj2 = document.querySelector('.yj2');
    var span = document.querySelector('.span');

    var a = 1;


    name.onblur = function () {

        if (this.value == '') {
            this.style.bordercolor = "red";
            this.nextElementSibling.className = 'erro ';
            this.nextElementSibling.innerHTML = '<i  class="name_i"></i>手机号码不能为空';
        } else if (tegname.test(this.value)) {
            this.nextElementSibling.className = "success";
            this.nextElementSibling.innerHTML = '<i class="name_i"></i>';
        }
        else {
            this.style.bordercolor = "red";
            this.nextElementSibling.className = "erro";
            this.nextElementSibling.innerHTML = '<i class="name_i"></i>请输入正确的手机号码';
        }

    }
    pws.onfocus = function () {
        yj1.style.display = 'block';
        this.nextElementSibling.className = '';
        this.nextElementSibling.innerHTML = '';
        yj1.onclick = function () {
            if (a = 1) {
                pws.type = 'text';
                a = 0;
            } else {
                yj1.innerHTML = "";
                a = 1;
            }
        }
    }

    pws.onblur = function () {
        yj1.style.display = 'none';
        if (this.value == '') {
            this.style.bordercolor = "red";
            this.nextElementSibling.className = 'erro opwds';
            this.nextElementSibling.innerHTML = '<i></i>密码不能为空';
        } else if (tegpws.test(this.value)) {
            this.nextElementSibling.className = "success";
            this.nextElementSibling.innerHTML = '<i></i>';
        }
        else {
            this.style.bordercolor = "red";
            this.nextElementSibling.className = "erro opwds";
            this.nextElementSibling.innerHTML = '<i ></i>请输入正确的密码';

        }

    }
    pws2.onfocus = function () {
        yj2.style.display = 'block';
        this.nextElementSibling.className = '';
        this.nextElementSibling.innerHTML = '';
    }

    pws2.onblur = function () {
        yj2.style.display = 'none';
        if (this.value == '') {
            this.style.bordercolor = "red";
            this.nextElementSibling.className = 'erro opwds ';
            this.nextElementSibling.innerHTML = '<i></i>密码不能为空';
        } else if (this.value === pws.value) {
            if (tegpws.test(this.value)) {
                this.nextElementSibling.className = "success";
                this.nextElementSibling.innerHTML = '<i></i>';
            }
            else {
                this.style.bordercolor = "red";
                this.nextElementSibling.className = "erro opwds";
                this.nextElementSibling.innerHTML = '<i></i>请输入正确的密码';
            }
        } else {
            this.nextElementSibling.className = "erro opwds";
            this.nextElementSibling.innerHTML = '<i></i>两次输入的密码不一致，请重试';
        }


    }
}