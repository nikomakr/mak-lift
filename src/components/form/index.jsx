function Form (){
    return (
        <form className="--form-control --card--flex-center --dir-column">
        <input 
        type="text" 
        placeholder="First Name"
        name="user_firstname" required/>
        <input 
        type="text" 
        placeholder="Last Name"
        name="user_lastname" required/><input 
        type="text" 
        placeholder="Email"
        name="E-mail" required/>
        <input 
        type="text" 
        placeholder="Mobile"
        name="Mobile number" required/>
        <input 
        type="text" 
        placeholder="Subject"
        name="subject" required/>
        <textarea name="message" cols="30" rows="10"></textarea>
        <button type='submit' className="--btn --btn-primary">Submit</button>
    </form>
    )
}

export default Form