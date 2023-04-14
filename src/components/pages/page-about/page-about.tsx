import { Component, h } from '@stencil/core';

@Component({
	tag: 'page-about',
	styleUrl: 'page-about.scss',
	shadow: true,
})
export class PageAbout {
	render() {
		return (
			<div class="h-96 text-center text-4xl pt-10">
				about
			</div>
		);
	}
}
