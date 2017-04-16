export const focus = {
	inserted: function (el, binding) {
		if (binding.value) {
    		el.focus()			
		}
  	},

  	update: function (el, binding) {
  		if (binding.value) {
  			el.focus()
  		}
  	}
}