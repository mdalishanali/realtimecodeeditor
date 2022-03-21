.homePageWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 100vh;
}

.formWrapper {
    background: #282a36;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    max-width: 90%;
}

footer {
    position: fixed;
    bottom: 0;
}

footer a {
    color: #4aee88;
}

.inputGroup {
    display: flex;
    flex-direction: column;
}

.mainLabel {
    margin-bottom: 20px;
    margin-top: 0;
}

.homePageLogo {
    height: 80px;
    margin-bottom: 30px;
}

.inputBox {
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    margin-bottom: 14px;
    background: #eee;
    font-size: 16px;
    font-weight: bold;
}

.btn {
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.joinBtn,
.leaveBtn {
    background: #4aed88;
    width: 100px;
    margin-left: auto;
}

.joinBtn:hover,
.leaveBtn:hover {
    background: #2b824c;
}

.createInfo {
    margin: 0 auto;
    margin-top: 20px;
}

.createNewBtn {
    color: #4aed88;
    text-decoration: none;
    border-bottom: 1px solid #4aed88;
    transition: all 0.3s ease-in-out;
}

.createNewBtn:hover,
footer a:hover {
    color: #368654;
    border-color: #368654;
}

.mainWrap {
    display: grid;
    grid-template-columns: 230px 1fr;
}

.aside {
    background: #1c1e29;
    padding: 16px;
    color: #fff;
    display: flex;
    flex-direction: column;
}
.asideInner {
    flex: 1;
}

.clientsList {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.client {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-weight: bold;
}
.userName {
    margin-top: 10px;
}

.logo {
    border-bottom: 1px solid #424242;
    padding-bottom: 10px;
}

.logoImage {
    height: 60px;
}

.leaveBtn {
    width: 100%;
    margin-top: 20px;
}
.CodeMirror {
    min-height: calc(100vh - 20px);
    font-size: 20px;
    line-height: 1.6;
    padding-top: 20px;
}