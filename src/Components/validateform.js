

const validateform = (data) => {
    let error={};

    if(!data.name.trim()){
        error.name='Name is required';
    }
    if(!data.email.trim()){
        error.email='Email is requird'
    }
    else if(!/\S+@\S+\.\S+/.test(data.email)){
        error.email='Email is invalid'
    }

    if(!data.password.trim()){
        error.password ='Password is required'
    }else if(data.password.length <6){
        error.password='Password should be at least 6 characters long'
    }
  return error;
}

export default validateform