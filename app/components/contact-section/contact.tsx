import { ST } from 'next/dist/shared/lib/utils';
import Style from './contact.module.css'

const contactSection = () => {
    return (
        <div>
            <div className={Style.container}>
                <div className={Style.row}>
                    <h2 className={Style.tittle}>Contact us</h2>
                    <p className={Style.desc}>Connect with Us: Let's Discuss Your <br />Digital Marketing Needs</p>
                </div>
                <form>
                    <div className={Style.inputarea}>
                        <div className={Style.namearea}>
                        <label htmlFor='' className={Style.namelabel}>Name</label><br />
                        <input type="name" name="name" placeholder='First Name' id={Style.name} />   
                        <input type="name" name="name" placeholder='Last Name' id={Style.name2} />
                        </div>
                        <div className={Style.emailarea}>
                            <label htmlFor="" className={Style.emaillabel}>Email</label><br />
                            <input type="email" name="email" placeholder='Email' className={Style.email} /><br />
                            <label htmlFor="" className={Style.phonelabel}>Phone</label><br />
                            <input type="text" name="number" placeholder='(000) 000-000' className={Style.number} />
                        </div>
                        <div className={Style.messagearea}>
                            <label htmlFor="" className={Style.messagelabel}>Message</label>
                            <input type="text" name="text" className={Style.message} />
                        </div>
                        <div className={Style.buttonarea}>
                            <button className={Style.btn}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default contactSection;