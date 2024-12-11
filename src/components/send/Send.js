import './Send.css';

export default function Send() {
    return (
        <>
            <div className="col">
                <div>

                    <label for="exampleInputEmail" class="form-label">Name*</label><br></br>
                    <input type="text" name="name" className="form-control " id="exampleInputEmail" aria-describedby="emailHelp" required></input>
                    <div class="text-danger" ></div>
                </div>
                <div>

                    <label for="exampleInputEmail" class="form-label">Email*</label><br></br>
                    <input type="email" name="email" className="form-control " id="exampleInputEmail" aria-describedby="emailHelp" required></input>
                    <div class="text-danger" ></div>
                </div>
            </div>


            <div className="col">
                <div>

                    <label for="exampleInputEmail" class="form-label">Phone</label><br></br>
                    <input type="text" name="phone" className="form-control " id="exampleInputEmail" aria-describedby="emailHelp" ></input>
                    <div class="text-danger" ></div>
                </div>
                <div>

                    <label class="form-label">Company</label><br></br>
                    <input type="text" name="Company" className="form-control " id="exampleInputEmail" aria-describedby="emailHelp" ></input>
                    <div class="text-danger" ></div>
                </div>
            </div>
            <br></br>
            <div className='col'>
                <label for="messagebox" class="form-label-msg " required>Message*</label><br></br>
                <textarea type="text-area" name="messagebox" className="messagebox " id="exampleInputEmail" aria-describedby="emailHelp" ></textarea>
            </div><br></br>
            <div className='col'>
                <div id="send">Send</div>
            </div>
        </>

    )
}