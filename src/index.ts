export class is_valid{
    static validateEmail(email: String) {
        if(email!=''){
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          let emailTest = re.test(String(email).toLowerCase())
          return emailTest;
        }else{
            return false;
        }
    }
}

