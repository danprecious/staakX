

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex items-center justify-center min-h-[100dvh] bg-foreground/5">
            {children}
        </div>
    )
}

export default AuthLayout;