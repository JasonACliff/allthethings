import React from 'react'
import {shallow} from 'enzyme'

import main from './main'

test('render the main container', ()=>{
	
	const wrapper = shallow(<Main></Main>)
	
	expect(wrapper).toMatchSnapshot()
	
})