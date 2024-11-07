// components/VHSEffect.tsx
'use client';

import { useEffect, useState } from 'react';

export const VHSEffect = () => {
	return (
		<div className="pointer-events-none">
			<div className="absolute inset-0 vhs-scanlines opacity-50" />
			<div className="absolute inset-0 vhs-noise opacity-10" />
		</div>
	);
};