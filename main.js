var submitBtn = document.getElementById('submitBtn');
        var loginArea =document.getElementById('login-area');
        var transictionArea =document.getElementById('transaction-area');

        submitBtn.addEventListener('click',function(){
            loginArea.style.display='none';
            transictionArea.style.display= 'block';
        })