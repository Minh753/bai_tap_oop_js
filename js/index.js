var arrNhanVien = [];

document.querySelector('#btnThemNV').onclick = function () {
    var nv = new NhanVien();
    nv.tknv = document.querySelector('#tknv').value;
    nv.name = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.password = document.querySelector('#password').value;
    nv.datepicker = document.querySelector('#datepicker').value;
    nv.luongCB = +document.querySelector('#luongCB').value;
    nv.chucVu = document.querySelector('#chucVu').value;
    nv.gioLam = +document.querySelector('#gioLam').value;

    var valid = true;

    // kiểm tra bỏ trống
    valid =
        kiemTraRong(nv.tknv, '#tbTKNV', 'Tài Khoản') &
        kiemTraRong(nv.name, '#tbTen', 'Tên') &
        kiemTraRong(nv.email, '#tbEmail', 'Email') &
        kiemTraRong(nv.password, '#tbMatKhau', 'Mật Khẩu') &
        kiemTraRong(nv.luongCB, '#tbLuongCB', 'Lương cơ bản') &
        kiemTraRong(nv.gioLam, '#tbGiolam', 'Giờ làm')
    // kiểm tra Email
    valid = kiemTraEmail(nv.email, '#tbEmail1')
    //kiểm tra độ dài
    valid =
        kiemTraDoDai(nv.tknv, '#tbTKNV1', 4, 6) &
        kiemTraDoDai(nv.password, '#tbMatKhau1', 6, 10)
    //kiểm tra ký tự
    valid = kiemTraSo(nv.tknv, '#tbTKNV2', 'Tài khoản')
    valid = kiemTraKyTu(nv.name, '#tbTen1', 'Tên')
    valid = kiemTraPassword(nv.password, '#tbMatKhau2', 'Passwork')
    valid = kiemTraNgay(nv.datepicker, '#tbNgay1', 'Ngày')

    valid = kiemTraGiaTri(nv.luongCB, '#tbLuongCB1', 1000000, 20000000)

    valid = kiemTraGiaTri(nv.gioLam, '#tbGiolam1', 80, 200)

    valid = kiemTraChucVu(nv.chucVu, '#tbChucVu', 'Chức vụ')


    if (valid != true) {
        return;
    }

    arrNhanVien.push(nv);

    var html = renderTableNhanVien(arrNhanVien)
    document.querySelector('#tableDanhSach').innerHTML = html;

    luuStorage();

}

function renderTableNhanVien(arrNV) {
    var htmlString = '';
    for (var index = 0; index < arrNV.length; index++) {
        var nv = arrNV[index];

        htmlString += `
            <tr>
                <td>${nv.tknv}</td>
                <td>${nv.name}</td>
                <td>${nv.email}</td>
                <td>${nv.datepicker}</td>
                <td>${loaiNhanVien(nv.chucVu)}</td>
                <td>${new Intl.NumberFormat('vn-VN').format(tinhTongLuong(nv.chucVu, nv.luongCB))}</td>
                <td>${xepLoai(nv.gioLam)}</td>
                <td>
                    <button class="btn btn-danger"onclick="xoaNhanVien('${nv.tknv}')">Xóa</button>
                    <button class="btn btn-primary"onclick="chinhSua('${index}')">Chỉnh sửa</button>

                </td>
            </tr>                                
        `
    }
    document.querySelector('#tableDanhSach').innerHTML = htmlString;
    return htmlString
}

function xoaNhanVien(tknv) {
    var indexDel = -1;
    for (var index = arrNhanVien.length - 1; index >= 0; index--) {
        if (arrNhanVien[index].tknv === tknv) {
            indexDel = index;
            arrNhanVien.splice(index, 1)
        }
    }
    renderTableNhanVien(arrNhanVien)
}


function chinhSua(indexEdit) {
    document.querySelector('#tknv').disabled = true;
    document.querySelector('#btnThemNV').disabled = true;

    var nvEdit = arrNhanVien[indexEdit];
    document.querySelector('#name').value = nvEdit.name;
    document.querySelector('#email').value = nvEdit.email;
    document.querySelector('#password').value = nvEdit.password;
    document.querySelector('#datepicker').value = nvEdit.datepicker;
    document.querySelector('#luongCB').value = nvEdit.luongCB;
    document.querySelector('#chucVu').value = nvEdit.chucVu;
    document.querySelector('#gioLam').value = nvEdit.gioLam;

    localStorage.setItem("indexEdit", indexEdit);
}
document.querySelector('#btnCapNhat').onclick = function () {
    var nv = new NhanVien();
    nv.tknv = document.querySelector('#tknv').value;
    nv.name = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.password = document.querySelector('#password').value;
    nv.datepicker = document.querySelector('#datepicker').value;
    nv.luongCB = +document.querySelector('#luongCB').value;
    nv.chucVu = document.querySelector('#chucVu').value;
    nv.gioLam = +document.querySelector('#gioLam').value;

    var valid = true;

    // kiểm tra bỏ trống
    valid =
        kiemTraRong(nv.name, '#tbTen', 'Tên') &
        kiemTraRong(nv.email, '#tbEmail', 'Email') &
        kiemTraRong(nv.password, '#tbMatKhau', 'Mật Khẩu') &
        kiemTraRong(nv.luongCB, '#tbLuongCB', 'Lương cơ bản') &
        kiemTraRong(nv.gioLam, '#tbGiolam', 'Giờ làm')
    // kiểm tra Email
    valid = kiemTraEmail(nv.email, '#tbEmail1')
    //kiểm tra độ dài
    valid =
        kiemTraDoDai(nv.tknv, '#tbTKNV1', 4, 6) &
        kiemTraDoDai(nv.password, '#tbMatKhau1', 6, 10)
    //kiểm tra ký tự
    valid = kiemTraSo(nv.tknv, '#tbTKNV2', 'Tài khoản')
    valid = kiemTraKyTu(nv.name, '#tbTen1', 'Tên')
    valid = kiemTraPassword(nv.password, '#tbMatKhau2', 'Passwork')
    valid = kiemTraNgay(nv.datepicker, '#tbNgay1', 'Ngày')

    valid = kiemTraGiaTri(nv.luongCB, '#tbLuongCB1', 1000000, 20000000)

    valid = kiemTraGiaTri(nv.gioLam, '#tbGiolam1', 80, 200)

    valid = kiemTraChucVu(nv.chucVu, '#tbChucVu', 'Chức vụ')


    if (valid != true) {
        return;
    }

    var indexEdit = localStorage.getItem('indexEdit');
    arrNhanVien[indexEdit] = nv;
    renderTableNhanVien(arrNhanVien);

    document.querySelector('#tknv').disabled = false;
    document.querySelector('#btnThemNV').disabled = false;

}

document.querySelector('#searchName').oninput = function (e) {
    var tuKhoa = e.target.value;
    tuKhoa = stringToSlug(tuKhoa);
    var output = []
    for (var index = 0; index < arrNhanVien.length; index++) {
        var nv = arrNhanVien[index];
        var xepLoai = stringToSlug(nv.xepLoai);
        if (nv.xepLoai.search(tuKhoa) != -1) {
            output.push(nv);
        }
    }
    console.log(output);
    renderTableNhanVien(output);
}



function luuStorage() {
    var strNhanVien = JSON.stringify(arrNhanVien);
    localStorage.setItem('arrNhanVien', strNhanVien);
}

function layStorage() {
    if (localStorage.getItem('arrNhanVien')) {
        var str = localStorage.getItem('arrNhanVien');
        arrNhanVien = JSON.parse(str);
        console.log(arrNhanVien);
        renderTableNhanVien(arrNhanVien);
    }
}


window.onload = function () {
    layStorage()
}