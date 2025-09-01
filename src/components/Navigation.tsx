import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-royal rounded-full flex items-center justify-center shadow-royal">
              <span className="text-primary-foreground font-playfair font-bold text-lg">ॐ</span>
            </div>
            <div>
              <h1 className="font-playfair font-bold text-xl text-foreground group-hover:text-saffron transition-colors">
                Mahalaxmi Stationery
              </h1>
              <p className="text-sm text-muted-foreground">& Xerox Center</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Button
              asChild
              variant={isActive('/') ? 'default' : 'ghost'}
              className={isActive('/') ? 'bg-saffron text-saffron-foreground' : 'hover:bg-accent hover:text-accent-foreground'}
            >
              <Link to="/">Home</Link>
            </Button>
            
            <Button
              asChild
              variant={isActive('/order') ? 'default' : 'ghost'}
              className={isActive('/order') ? 'bg-emerald text-emerald-foreground' : 'hover:bg-accent hover:text-accent-foreground'}
            >
              <Link to="/order">Place Order</Link>
            </Button>
            
            <Button
              asChild
              variant={isActive('/contact') ? 'default' : 'ghost'}
              className={isActive('/contact') ? 'bg-royal-blue text-royal-blue-foreground' : 'hover:bg-accent hover:text-accent-foreground'}
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm"></span>
                <span className="bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm mt-1"></span>
                <span className="bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm mt-1"></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-2">
          <Button
            asChild
            variant={isActive('/') ? 'default' : 'ghost'}
            className={`w-full justify-start ${isActive('/') ? 'bg-saffron text-saffron-foreground' : ''}`}
          >
            <Link to="/">🏠 Home</Link>
          </Button>
          
          <Button
            asChild
            variant={isActive('/order') ? 'default' : 'ghost'}
            className={`w-full justify-start ${isActive('/order') ? 'bg-emerald text-emerald-foreground' : ''}`}
          >
            <Link to="/order">📄 Place Order</Link>
          </Button>
          
          <Button
            asChild
            variant={isActive('/contact') ? 'default' : 'ghost'}
            className={`w-full justify-start ${isActive('/contact') ? 'bg-royal-blue text-royal-blue-foreground' : ''}`}
          >
            <Link to="/contact">📞 Contact Us</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;