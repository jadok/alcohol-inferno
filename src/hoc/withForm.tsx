import Component from 'inferno-component'
// import createClass from 'inferno-create-class'
import { throwError } from 'inferno-shared'

export interface InputData {
  name: string;
  defaultValue: string;
  validate: () => string;
}

export interface WithFormOption {
  values: InputData[];
  handleSubmit?: ({}) => void;
}

const opt: WithFormOption = {
  values: [
    {
      name: 'simple',
      defaultValue: '0',
      validate: () => ''
    }
  ],
}

export class IwithFormState implements IwithFormInternaleProps{
  errors: {
    [id: string]: string
  };
  values: {
    [id: string]: string
  };
  handleChange: (e: Event) => void;
  handleSubmit: (e: Event) => void;
  isSubmitting: boolean;
}

interface IwithFormInternaleProps {
  errors: {
    [id: string]: string
  },
  values: {
    [id: string]: string
  },
  isSubmitting: boolean;
}
/*
function withForm(wrappedcomponent: Component<IwithFormState, any>, options: WithFormOption = opt) {
  const WithFormVar = class WithForm extends Component<any, IwithFormInternaleProps> {
    validate = [];

    constructor(props) {
      super(props)
      const state = {
        errors: {},
        values: {},
        isSubmitting: false
      }
      const validate = []
      options.values.forEach((value) => {
        state.values[value.name] = value.defaultValue
        validate[value.name] = value.validate
      })
      this.state = state
      this.validate = validate
    }

    handleChange(e) {
      const { checked, name, type, value } = e.target
      const elementValue = /number|range/.test(type) ?
        parseFloat(value)
        : /checkbox/.test(type) ? checked : value
      let values = (this.state as IwithFormInternaleProps).values
      values = Object.assign({}, values, { [name]: elementValue })
      let errors = (this.state as IwithFormInternaleProps).errors
      const error = this.validate[name](elementValue)
      if (error !== null) {
        errors = Object.assign({}, errors, { [name]: error })
        this.setState({ errors, values })
      }
      else if (typeof errors[name] !== 'undefined') {
        delete errors[name]
        this.setState({ errors, values })
      }
      else {
        this.setState({ values })
      }
    }
    handleSubmit(e) {
      e.preventDefault()
      this.setState({ isSubmitting: true })
      const errors = {}
      let onError = false
      const that = this
      Object.keys((this.state as IwithFormInternaleProps).values).forEach((key) => {
        const error = that.validate[key]((this.state as IwithFormInternaleProps).values[key])
        if (error !== null) {
          onError = true
          errors[key] = error
        }
      })
      if (onError) {
        this.setState({ errors, isSubmitting: false })
      }
      else if (typeof options.handleSubmit !== 'undefined') {
        options.handleSubmit({ e, onError, that: this })
      }
      else {
        this.setState({ isSubmitting: false })
      }
    }
    render() {
      return (
        <wrappedcomponent
          {...this.props}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          values={(this.state as IwithFormInternaleProps).values}
          errors={(this.state as IwithFormInternaleProps).errors}
          isSubmitting={(this.state as IwithFormInternaleProps).isSubmitting}
        />
      )
    }
  }
  return WithFormVar
}
*/
export function withForm(wrappedcomponent: any, options: WithFormOption = opt): any {
  console.log((!!wrappedcomponent.prototype && !!wrappedcomponent.prototype.render), wrappedcomponent.isReactClass, Component.isPrototypeOf(wrappedcomponent))
  if ((typeof wrappedcomponent === 'function'
    && (!!wrappedcomponent.prototype || !!wrappedcomponent.prototype.render))
    || wrappedcomponent.isReactClass) {
      const WithFormVar: any = class extends Component<any, IwithFormInternaleProps> {
        public validate = [];
        constructor(props, context) {
          super(props, context)
          const mystate: IwithFormInternaleProps = {
            errors: {},
            values: {},
            isSubmitting: false
          }
          const validate = []
          options.values.forEach((value) => {
            mystate.values[value.name] = value.defaultValue
            validate[value.name] = value.validate
          })
          this.state = mystate
          this.validate = validate
        }
        handleChange(e) {
          const { checked, name, type, value } = e.target
          const elementValue = /number|range/.test(type) ?
            parseFloat(value)
            : /checkbox/.test(type) ? checked : value
          let values = (this.state as IwithFormInternaleProps).values
          values = Object.assign({}, values, { [name]: elementValue })
          let errors = (this.state as IwithFormInternaleProps).errors
          const error = this.validate[name](elementValue)
          if (error !== null) {
            errors = Object.assign({}, errors, { [name]: error })
            this.setState({ errors, values })
          }
          else if (typeof errors[name] !== 'undefined') {
            delete errors[name]
            this.setState({ errors, values })
          }
          else {
            this.setState({ values })
          }
        }
        handleSubmit(e) {
          e.preventDefault()
          this.setState({ isSubmitting: true })
          const errors = {}
          let onError = false
          const that = this
          Object.keys((this.state as IwithFormInternaleProps).values).forEach((key) => {
            const error = that.validate[key]((this.state as IwithFormInternaleProps).values[key])
            if (error !== null) {
              onError = true
              errors[key] = error
            }
          })
          if (onError) {
            this.setState({ errors, isSubmitting: false })
          }
          else if (typeof options.handleSubmit !== 'undefined') {
            options.handleSubmit({ e, onError, that: this })
          }
          else {
            this.setState({ isSubmitting: false })
          }
        }
        render() {
          return (
            <wrappedcomponent
              {...this.props}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              values={(this.state as IwithFormInternaleProps).values}
              errors={(this.state as IwithFormInternaleProps).errors}
              isSubmitting={(this.state as IwithFormInternaleProps).isSubmitting}
            />
          )
        }
      }
      return WithFormVar
    }
    else {
      throwError('Please pass a valid component to "withForm"')
    }
    return null
  }

export default withForm

/*
const optionst: WithFormOption = {
  values: [
    {
      name: 'qty',
      defaultValue: '0',
      validate: () => ''
    },
    {
      name: 'degree',
      defaultValue: '0',
      validate: () => ''
    }
  ]
}

export class Plop extends Component<any, IwithFormInternaleProps> {
  validate = [];

  constructor(props) {
    super(props)
    const state = {
      errors: {},
      values: {},
      isSubmitting: false
    }
    const validate = []
    optionst.values.forEach((value) => {
      state.values[value.name] = value.defaultValue
      validate[value.name] = value.validate
    })
    this.state = state
    this.validate = validate
  }

  handleChange(e) {
    const { checked, name, type, value } = e.target
    const elementValue = /number|range/.test(type) ?
      parseFloat(value)
      : /checkbox/.test(type) ? checked : value
    let values = (this.state as IwithFormInternaleProps).values
    values = Object.assign({}, values, { [name]: elementValue })
    let errors = (this.state as IwithFormInternaleProps).errors
    const error = this.validate[name](elementValue)
    if (error !== null) {
      errors = Object.assign({}, errors, { [name]: error })
      this.setState({ errors, values })
    }
    else if (typeof errors[name] !== 'undefined') {
      delete errors[name]
      this.setState({ errors, values })
    }
    else {
      this.setState({ values })
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    this.setState({ isSubmitting: true })
    const errors = {}
    let onError = false
    const that = this
    Object.keys((this.state as IwithFormInternaleProps).values).forEach((key) => {
      const error = that.validate[key]((this.state as IwithFormInternaleProps).values[key])
      if (error !== null) {
        onError = true
        errors[key] = error
      }
    })
    if (onError) {
      this.setState({ errors, isSubmitting: false })
    }
    else if (typeof optionst.handleSubmit !== 'undefined') {
      optionst.handleSubmit({ e, onError, that: this })
    }
    else {
      this.setState({ isSubmitting: false })
    }
  }
  render() {
    return (
      <wrappedcomponent
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        values={(this.state as IwithFormInternaleProps).values}
        errors={(this.state as IwithFormInternaleProps).errors}
        isSubmitting={(this.state as IwithFormInternaleProps).isSubmitting}
      />
    )
  }
}
*/
