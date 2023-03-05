const username = document.getElementById('username');
const password = document.getElementById('password');
const logBtn = document.getElementById('logBtn');


logBtn.addEventListener('click', (e)=>{
    alert.style.display = 'none';
    e.preventDefault();
    
    fetch(`http://greenvelvet.alwaysdata.net/bugTracker/api/login/${username.value}/${password.value}`)
    .then((res)=>res.json())
    .then((response)=>{
        if(response.result.status === 'done'){
            localStorage.setItem('user', JSON.stringify({
                "id" : response.result.id,
                "token" : response.result.token
            }));

            window.location.href = `/pages/bugList.html`;

        }else if(response.result.status === 'failure'){
            alert.innerHTML = `Le nom d'utilisateur ou le mot de passe est incorrect !`;
            alert.style.display = 'block';
            
        }
    })
});