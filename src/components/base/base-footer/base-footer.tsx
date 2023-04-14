import { Component, h } from '@stencil/core';

@Component({
	tag: 'base-footer',
	styleUrl: 'base-footer.scss',
	shadow: true,
})
export class BaseFooter {
	render() {
		return (
			<div class="bg-purple-600 text-center text-2xl py-4">
				footer
			</div>
		);
	}
}
