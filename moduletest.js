export default class Test1{
    getData() {

        var requestOptions = {
            method: 'GET',
            headers: {"Content-Type": "application/json"},
            redirect: 'follow'
        };

        fetch("http://localhost:8080/getUser", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    regiData(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": "4",
            "pw": "1234",
            "age": "5",
            "name": "abcccc",
            "phone": "234",
            "email": "222@naver.com"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/regiUser2", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    putData(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": "4",
            "pw": "1234",
            "age": "5",
            "name": "abcccc_toto",
            "phone": "234",
            "email": "222@naver.com"
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/updateUser2/3", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    delUser(){
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/delUser/3", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    login(id, pw){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": id,
            "pw": pw
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/loginDo", requestOptions)
            .then(response => response.text())
            .then(result => {
                    alert(result);
                    localStorage.setItem("token", result);
                }
            )
            .catch(error => console.log('error', error));
    }

    authToken(token){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = token;

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/authToken", requestOptions)
            .then(response => response.text())
            .then(result => {
                if(result == "true"){
                    alert("토큰이 일치합니다.");
                }else{
                    alert("유효한 토큰을 입력하십시오.");
                }
            })
            .catch(error => {
                alert("토큰이 다릅니다 error!");
                console.log('error', error)
            });
    }
}