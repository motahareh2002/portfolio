import { Component, h ,Prop} from '@stencil/core';

@Component({
	tag: 'base-button',
	styleUrl: 'base-button.scss',
	shadow: true
})
export class BaseButton{
    @Prop() text : string
    @Prop() backgroundColor : string
    @Prop() borderRadius : string
    @Prop() textColor : string = "white"
	render() {
		return (
			<button class = {`${this.backgroundColor} rounded-${this.borderRadius} text-${this.textColor}`}>{this.text}</button>
		);
	}
}
