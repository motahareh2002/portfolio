import { Component, h,Prop } from '@stencil/core';

@Component({
	tag: 'base-btn',
	styleUrl: 'base-btn.scss',
	shadow: true,
})
export class BaseBtn{
    @Prop() text : string
    @Prop() bgColor : string 
    @Prop() radius : string = "lg"
    @Prop() tColor : string = "white"
    render(){
        return(
            <button class={`${this.bgColor} rounded-${this.radius} text-${this.tColor}`}>{this.text}</button>
        )
    }
}