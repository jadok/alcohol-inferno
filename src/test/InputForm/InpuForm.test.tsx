import InfernoTestUtils from 'inferno-test-utils'

import InputForm from '../../component/InputForm/InputForm'

describe('Render InputForms', () => {
  it('Render InputForm', () => {
    const vNodeTree = (
      <InputForm />
    )
    const renderedTree = InfernoTestUtils.renderIntoDocument(vNodeTree)
    expect(renderedTree).toMatchSnapshot()
  })
})