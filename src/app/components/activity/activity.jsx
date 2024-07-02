import React from 'react'

const Activity = () => {
    const [timmyDetail, setTimmyDetail] = useState({
        name: "",
        text: "",
        time: "",
        description: "",
        src: null,
        video: "",
      });

      

      const timmy = {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTimmyDetail({
      ...timmyDetail,
      [name] : value
    });
  };

  return (
    <section className={styles.Activity_Container}>
        <div className={styles.Admin_Wrapper}>
          <div className={styles.Admin_Text}>
            <VscAccount className={styles.Admin_Icon} />
            <p>Hello Admin</p>
          </div>
          <Image
          src={note}
          alt='plus'
          width={50}
          height={50}
          className={styles.Admin_Img}
           />
        </div>
        <div className={styles.Add_New_Activity}>
            <h4>Add new activity</h4>
        </div>
        <section className={styles.Activity_Wrapper}>
            <h4>Basic information</h4>
            <div className={styles.Activity_Head}>
                <p>Animation images<span>*</span></p>
                <div className={styles.Activity_Form}>
                    <Image 
                    src={notes}
                    alt='plus'
                    width={50}
                    height={50}
                    className={styles.Animation_Img}
                    />
                    <input type='text' className={styles.Activity_Input} onChange={handleChange}  placeholder='Input URL' />
                </div>
            </div>
            <div className={styles.Activity_Head}>
                <p>Animation Videos<span>*</span></p>
                <div className={styles.Activity_Form}>
                    <input type='text' className={styles.Activity_Input} onChange={handleChange} placeholder='Input URL' />
                </div>
            </div>
            <div className={styles.Activity_Head}>
                <p>Animation Name<span>*</span></p>
                <div className={styles.Activity_Form}>
                    <input type='text' className={styles.Activity_Input} onChange={handleChange} />
                </div>
            </div>
            <div className={styles.Activity_Head}>
                <p>Description<span>*</span></p>
                <div className={styles.Activity_Form}>
                    <input type='text' className={styles.Activity_Input} onChange={handleChange} />
                </div>
            </div>
            <div className={styles.Activity_Head}>
                <p>Time<span>*</span></p>
                <div className={styles.Activity_Form_two}>
                    <input type='time' className={styles.Activity_Input} />
                    <p>Min</p>
                    <input type='time' className={styles.Activity_Input} />
                    <p>Sec</p>
                </div>
            </div>
            <div className={styles.Button_One}>
                <div className={styles.Button_Two}>
                    <button className={styles.Cancel_btn}>Cancel</button>
                    <button className={styles.Save_btn}>Save</button>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Activity
