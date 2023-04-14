import { Component, h } from '@stencil/core';

@Component({
	tag: 'page-home',
	styleUrl: 'page-home.scss',
	shadow: true,
})
export class PageHome {
	render() {
		return (
			<div class="h-96 text-center text-4xl pt-10">
				Home
			</div>
		);
	}
}
