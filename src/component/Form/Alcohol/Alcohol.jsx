import InputForm from 'component/FormField/InputForm/InputForm.jsx'
import InputSubmitForm from 'component/FormField/InputSubmitForm/InputSubmitForm.jsx'
/*
const Alcohol = ({ errors, handleChange, handleSubmit, isSubmitting, values }) => (
  <form action="" onSubmit={handleSubmit}>
   <div>
     <InputForm
       id="qty"
       name="qty"
       type="number"
       handleChange={handleChange}
     />
     <InputForm
       id="degree"
       name="degree"
       type="number"
       handleChange={handleChange}
     />
     <InputSubmitForm
      value="Add"
     />
   </div>
  </form>
)
*/

//export default Alcohol


const Alcohol = () => (
  <form action="" onSubmit={this.props.handleSubmit}>
    <div>
      <InputForm
        id="qty"
        name="qty"
        type="number"
        handleChange={this.props.handleChange}
      />
      <InputForm
        id="degree"
        name="degree"
        type="number"
        handleChange={this.props.handleChange}
      />
      <InputSubmitForm
        value="Add"
      />
    </div>
  </form>
)

export default Alcohol
