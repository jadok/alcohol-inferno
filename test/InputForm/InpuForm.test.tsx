import 'inferno'
import 'inferno-component'
import { renderIntoDocument } from 'inferno-test-utils'
import 'inferno-devtools'
import 'jasmine'

import InputForm from './../src/component/InputForm/InputForm.tsx'

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
