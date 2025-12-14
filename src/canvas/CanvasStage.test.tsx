// src/canvas/CanvasStage.test.tsx
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import CreateSVGCanvas from './CanvasStage';

describe('CanvasStage', () => {
  let logSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  it('logs the pointer coordinates on pointer down', () => {
    const { getByTestId } = render(<CreateSVGCanvas />);
    const svg = getByTestId('canvas');

    fireEvent.pointerDown(svg, { clientX: 123, clientY: 456 });

    expect(logSpy).toHaveBeenCalledWith('Current coordinate is : (123, 456)');
  });
});
