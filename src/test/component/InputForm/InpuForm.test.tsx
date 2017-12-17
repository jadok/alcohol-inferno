import 'inferno-component'
import { renderIntoDocument } from 'inferno-test-utils'
import 'jasmine'

import InputForm from '../../../src/component/FormField/InputForm/InputForm'

describe('Render InputForms', () => {
  it('Render InputForm', () => {
    const vNodeTree = (
      <InputForm name="toto" id="toto" type="text" />
    )
    const renderedTree = renderIntoDocument(vNodeTree)
    if (renderedTree === null) {
      expect(false).toBeTruthy()
    }
    // expect(vNodeToSnapshot(renderedTree)).toMatchSnapshot()
  })
})
