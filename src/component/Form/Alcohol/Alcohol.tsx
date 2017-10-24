import Component from 'inferno-component'
import { IwithFormState } from 'hoc/withForm'
import InputForm from 'component/FormField/InputForm/InputForm'
import InputSubmitForm from 'component/FormField/InputSubmitForm/InputSubmitForm'
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


export default class Alcohol extends Component<IwithFormState, any> {
  render() {
    return (
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
  }
}
