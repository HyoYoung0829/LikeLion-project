let login_check = true; /* 로그인 완료가 되면 true로 바꿔주기  /  로그인 되면 로그인 버튼이 로그아웃 버튼으로 바꾸기 */
let logout = document.getElementById('login_btn');

function no_login(){
    if (login_check == false)
    {
        alert("로그인 먼저 하셔야 합니다 :)");
        location.href = '/templates/Login.html';
    }
    else if(login_check == true)
    {
        location.href = '/templates/mypage.html'; /* 마이페이지 주소 넣기 */
    }
}

function display_logout(){  /* 로그인 완료시 외부에서 이 함수를 실행하고 로그아웃 표시  */
    login_check = true;
    logout.value="Logout";
}

function login_and_logout(){
    if(login_check == true){  /* 현재 로그인 상태. login_check = false로 바꾸고 버튼 이름을 다시 login으로 바꿈 */
        login_check = false;
        logout.value="Login";
    }
    else if(login_check == false){   /* 현재 로그아웃 상태. 클릭하면 로그인 창으로 */
        location.href = '/templates/Login.html';
    }
}



