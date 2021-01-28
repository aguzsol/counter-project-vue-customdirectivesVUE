const app = Vue.createApp({
    data() {
        return {
            counter : 0
        }
    },

    methods : {
        updateCounter(num) {
            this.counter += num
        },
    }
})

app.directive('highlight',{
    beforeMount(el, binding, vnode){
        el.style.background = binding.value
    }
})

app.directive('hide-after',{
    beforeMount(el, binding, vnode){
        setTimeout( ()=>{
            el.style.display='none'  }
            ,binding.value*1000)
        
    }
})

app.directive('blick-if-no-action', {
    beforeMount(el, binding, vnode) {
        document.addEventListener("mousemove", () => {
            if (el.style.borderColor = "#ffff0000") {
                clearTimeout(3000)
                setTimeout(() => {
                    el.style.borderColor = "yellow"
                    el.style.borderRadius = "rounded-pill"
                    el.style.borderWidth = "3px"
                }, binding.value * 1000)
            }
        }, false)
    }
})
app.mount('#app')
