import { render, screen } from '@testing-library/react';
import React from 'react';
import ArticleListCardStyle4 from './index';
import '@testing-library/jest-dom'

describe('ArticleListCardStyle1', () => {
  test('renders when loaded is true', () => {
    const article = {
      id: 1,
      title: 'Article Title',
    };
    render(<ArticleListCardStyle4 loaded={true} article={article} />);
    
    const articleLink = screen.getByRole('link');
    const title = screen.getByText('Article Title');
    
    expect(articleLink.getAttribute('href')).toBe('/article/1');
    expect(title).toBeInTheDocument();
  });

  test('renders skeleton when loaded is false', () => {
    render(<ArticleListCardStyle4 loaded={false} />);
    
    const skeletonCard = screen.getByTestId('skeleton-card');
    
    expect(skeletonCard).toBeInTheDocument();
  });

  test('renders nothing when loaded is true and article is undefined', () => {
    render(<ArticleListCardStyle4 loaded={true} />);
    
    const skeletonCard = screen.queryByTestId('skeleton-card');

    const articleLink = screen.queryByRole('link');
    const title = screen.queryByText('Article Title');
    
    expect(articleLink).not.toBeInTheDocument();
    expect(title).not.toBeInTheDocument();
    
    expect(skeletonCard).not.toBeInTheDocument();
  });
});
