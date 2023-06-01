function DoLoginForm__submit(form) {
    var loginId = form.id.value;
    var loginPw = form.pw.value;
  
    // AJAX를 사용하여 서버에 데이터를 전송합니다.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          if (response.success) {
            // 로그인 성공 시 처리할 내용을 작성해주세요.
            alert('로그인에 성공했습니다!');
            // 예를 들면 메인 페이지로 이동하거나, 다른 작업을 수행할 수 있습니다.
            window.location.href = '/templates/index.html';
          } else {
            // 로그인 실패 시 처리할 내용을 작성해주세요.
            alert('아이디 또는 비밀번호가 일치하지 않습니다.');
          }
        } else {
          // 요청 실패 시 처리할 내용을 작성해주세요.
          alert('서버와의 통신 중 오류가 발생했습니다.');
        }
      }
    };
  
    xhr.open('POST', 'http://127.0.0.1:5501/', true);  // 서버의 실제 URL 주소로 변경해주세요.
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('loginId=' + encodeURIComponent(loginId) +
             '&loginPw=' + encodeURIComponent(loginPw));
  }
  