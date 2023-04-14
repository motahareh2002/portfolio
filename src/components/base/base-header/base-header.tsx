import { Component, h } from '@stencil/core';

@Component({
	tag: 'base-header',
	styleUrl: 'base-header.scss',
	shadow: true,
})
export class BaseHeader {
	render() {
		return (
			<header class="bg-purple-700 text-center py-4">
				<h1 class=" text-2xl">Stencil App Starter</h1>

				<div class="text-xl">
					<stencil-route-link url="/" exact={true} class="px-2" activeClass="text-blue-400">Home</stencil-route-link>
					<stencil-route-link url="/about" class="px-2" activeClass="text-blue-400">About</stencil-route-link>
				</div>

			</header>
		);
	}
}
