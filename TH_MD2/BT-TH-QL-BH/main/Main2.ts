import {ManagerProduct2} from "../service/managerProduct2";
import {Product2} from "../model1/product2";
let input = require('readline-sync');
let listP: ManagerProduct2 = new ManagerProduct2();
function mainMenu2() {
    let menu2 = `---Menu chinh---\n1.Them SP\n2.Hien thi TT SP\n3.Sua SP\n4.Xoa Sp\n5.Tim kiem Sp\n0.Thoat`
    let choice;
    do {
        console.log(menu2);
        choice = +input.question('Nhap lua chon cua ban :');
        switch (choice) {
            case 1:
                addProduct2();
                break;
            case 2:
                showProduct2();
                break;
            case 3:
                editProduct();
                break;
            case 4:
                deleteProduct();
                break;
            case 5:
                searchProcductName2()
                break;
        }

    } while (choice != 0)

    // tìm kiếm theo tên gần đúng
    function searchProcductName2() {
        let name = input.question('Nhap ten can tim :');
        let name1 = new RegExp(name);
        let flag = 0;
        for (let i = 0; i < listP.listProduct2.length; i++) {
            let test1 = name1.test(listP.listProduct2[i].name)
            if (test1==true){
                console.log(`id: ${listP.listProduct2[i].id} ,
                             Tên sp: ${listP.listProduct2[i].name},
                             Loai: ${listP.listProduct2[i].sectors}, 
                             So luong: ${listP.listProduct2[i].quatity},
                             Gia : ${listP.listProduct2[i].pice}, 
                             Thoi gian: ${listP.listProduct2[i].time}, 
                             Mo ta : ${listP.listProduct2[i].describe}`)
                flag++;
            }
        }
        if (flag==0){
            console.log(`--Ko co du lieu--`);
        }
        // listP.findbyName(name);
    }

    function deleteProduct() {
        let id = +input.question('Nhap id sp can xoa :');
        if (listP.findbyID1(id) == -1) {
            console.log('Ko tim thay de xoa :')
        } else {
            listP.delete(id);
            console.log('Xoa thanh cong')
            mainMenu2();
        }
    }

    function editProduct() {
        let id = +input.question('Nhap id Sp can sua :');
        if (listP.findbyID1(id) == -1) {
            console.log('KO TIM THAY :')
        } else {
            let name = input.question('Nhap ten Sp sua :');
            let sectors = input.question('Nhap loai SP sua : ')
            let quantity = +input.question('Nhap so luong SP sua:')
            let price = +input.question('Nhap gia Sp sua :');
            let time = new Date();
            let today = `${time.getHours()}:${time.getMinutes()}, Ngay thang: ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`
            let describe = input.question('Nhap mo ta Sp sua :');
            let procuct2: Product2 = new Product2(id, name, sectors, quantity, price, today, describe);
            listP.edit(id, procuct2);
            console.log('Sua thanh cong:')
        }
    }

    function showProduct2() {
        if (listP.display().length == 0) {
            console.log('K CO DU LIEU');
        } else {
            console.log(listP.display());
        }
    }

    function addProduct2() {
        console.log('---Moi ban nhap sp can mua---')
        let id = +input.question('Nhap id Sp :');
        let name = input.question('Nhap ten Sp :');
        let sectors = input.question('Nhap loai SP : ')
        let quantity = +input.question('Nhap so luong SP:')
        let price = +input.question('Nhap gia Sp :');
        let time = new Date();
        let today = `${time.getHours()}:${time.getMinutes()}, Ngay thang: ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`
        let describe = input.question('Nhap mo ta Sp :');
        let procuct2: Product2 = new Product2(id, name, sectors, quantity, price, today, describe);
        listP.add(procuct2);
    }
}
mainMenu2();