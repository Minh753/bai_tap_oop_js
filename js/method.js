function tinhTongLuong(chucVu, luongCB) {
    var output = 0;
    if (chucVu == 1) {
        output = luongCB * 3
    } else if (chucVu == 2) {
        output = luongCB * 2
    } else if (chucVu == 3) {
        output = luongCB * 1
    }
    return output
}

function xepLoai(gioLam) {
    var output = '';
    if (gioLam >= 192) {
        output = 'Nhân Vien Xuất Sắc'
    } else if (gioLam >= 176) {
        output = 'Nhân Vien Giỏi'
    } else if (gioLam >= 160) {
        output = 'Nhân Vien Khá'
    } else if (gioLam < 160) {
        output = 'Nhân Viên Trung Bình'
    }
    return output
}

function loaiNhanVien(chucVu) {
    var output = '';
    if (chucVu == 1) {
        output = 'Giám Đốc'
    } else if (chucVu == 2) {
        output = 'Trưởng Phòng'
    } else if (chucVu == 3) {
        output = 'Nhân Viên'
    }
    return output
}


function kiemTraRong(value, selectorError, name) {

    if (value == '') {
        document.querySelector(selectorError).innerHTML = `${name} không được bỏ trống`;
        document.querySelector(selectorError).style.display = 'block'

        return false;
    }

    document.querySelector(selectorError).innerHTML = '';
    return true;
}

function kiemTraEmail(value, selectorError) {
    var regexEmail = /^[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (regexEmail.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).style.display = 'block'
    document.querySelector(selectorError).innerHTML = 'Email không hợp lệ';
    return false;
}

function kiemTraDoDai(value, selectorError, minLength, maxLength) {
    if (value.length < minLength || value.length > maxLength) {
        document.querySelector(selectorError).innerHTML = `Nhập từ${minLength}-${maxLength} kí tự`;
        document.querySelector(selectorError).style.display = 'block'
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true
}

function kiemTraKyTu(value, selectorError, name) {
    var regexLetter = /^[a-zA-Z\u00C0-\u1EF9\s]+$/g;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).style.display = 'block'
    document.querySelector(selectorError).innerHTML = `${name} tất cả phải là ký tự`;
    return false;
}

function kiemTraSo(value, selectorError, name) {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).style.display = 'block'
    document.querySelector(selectorError).innerHTML = `${name} tất cả phải là số`;
    return false;
}

function kiemTraPassword(value, selectorError, name) {
    var regexPassword =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (regexPassword.test(value)) {
        document.querySelector(selectorError).innerHTML = "";
        return true;
    }
    document.querySelector(selectorError).style.display = 'block'
    document.querySelector(selectorError).innerHTML =
        name + " chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
    return false;
}

function kiemTraNgay(value, selectorError, name) {
    var regexDate =
        /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (regexDate.test(value)) {
        document.querySelector(selectorError).innerHTML = "";
        return true;
    }
    document.querySelector(selectorError).style.display = 'block'
    document.querySelector(selectorError).innerHTML =
        name + " không đúng đinh dạng ngày";
    return false;
}

function kiemTraGiaTri(value, selectorError, minValue, maxValue) {
    if (Number(value) < minValue || Number(value) > maxValue) {
        document.querySelector(selectorError).innerHTML = `Hãy nhập từ ${minValue}-${maxValue}`;
        document.querySelector(selectorError).style.display = 'block'
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true
}

function kiemTraChucVu(value, selectorError, name) {
    if (value == 1 | value == 2 | value == 3) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).style.display = 'block'
    document.querySelector(selectorError).innerHTML = name + ' là bắt buộc!';
    return false;
}

function stringToSlug(title) {
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();
    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');

    return slug;
}