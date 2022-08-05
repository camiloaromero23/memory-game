import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import CreateButton from './CreateButton.vue';

describe('CreateButton', () => {
  const clickMock = vi.fn();
  render(CreateButton, {
    props: {
      text: 'Test Create',
      // eslint-disable-next-line
      click: clickMock,
    },
  });

  it('should render correctly', () => {
    const button = screen.getByRole('button', { name: 'Test Create' });

    expect(button).toBeDefined();
  });

  it('should call click when clicked', async () => {
    const button = screen.getByRole('button', { name: 'Test Create' });

    await userEvent.click(button);
    expect(clickMock).toHaveBeenCalledOnce();
  });
});
