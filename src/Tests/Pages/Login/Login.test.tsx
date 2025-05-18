import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Login from '@/Pages/Login/Index';
import { AuthProvider } from '@/Features/Auth/Hooks/useAuth';
import { axe, toHaveNoViolations } from 'jest-axe';


expect.extend(toHaveNoViolations);

describe('Login Page', () => {
  const renderLogin = () => {
    return render(
      <BrowserRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </BrowserRouter>
    );
  };

  it('should render login form', () => {
    renderLogin();
    
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
  });

  it('should show error message with invalid credentials', async () => {
    renderLogin();
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'invalid@email.com' },
    });
    
    fireEvent.change(screen.getByLabelText(/senha/i), {
      target: { value: 'wrongpassword' },
    });
    
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/credenciais inválidas/i)).toBeInTheDocument();
    });
  });

  it('should login successfully with valid credentials', async () => {
    renderLogin();
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'teste@acelen.com' },
    });
    
    fireEvent.change(screen.getByLabelText(/senha/i), {
      target: { value: '123456' },
    });
    
    fireEvent.click(screen.getByRole('button', { name: /entrar/i }));
    
    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
    });
  });

  it('should not have accessibility violations', async () => {
    const { container } = renderLogin();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
}); 