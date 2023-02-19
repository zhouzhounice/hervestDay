export function createElement(type,config,children){
	 // 处理参数
	return ReactElement(
		type,
		key,
		ref,
		self,
		source,
		ReactCurrentOwner.current,
		props
	)
}

const ReactElement = function (type,key,ref,self,source,owner,props){
	let element;
	element = {
		$$typeof: REACT_ELEMENT_TYPE,
		
		type,
		key,
		ref,
		props,
		_owner: owner
	};
	return element
}
