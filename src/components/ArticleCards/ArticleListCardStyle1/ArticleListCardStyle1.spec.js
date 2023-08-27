import { render, screen } from '@testing-library/react';
import React from 'react';
import ArticleListCardStyle1 from './index';
import '@testing-library/jest-dom'

describe('ArticleListCardStyle1', () => {
  test('renders when loaded is true', () => {
    const article = {
      id: 1,
      feature_img_url: 'image-url',
      article_category: 'Category',
      title: 'Article Title',
    };
    render(<ArticleListCardStyle1 loaded={true} article={article} />);
    
    const articleLink = screen.getByRole('link');
    const image = screen.getByAltText('');
    const category = screen.getByText('Category');
    const title = screen.getByText('Article Title');
    
    expect(articleLink).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('renders skeleton when loaded is false', () => {
    render(<ArticleListCardStyle1 loaded={false} />);
    
    const skeletonImage = screen.getByTestId('skeleton-image');
    const skeletonCategory = screen.getByTestId('skeleton-category');
    const skeletonTitle = screen.getByTestId('skeleton-title');
    
    expect(skeletonImage).toBeInTheDocument();
    expect(skeletonCategory).toBeInTheDocument();
    expect(skeletonTitle).toBeInTheDocument();
  });

  // Additional tests can be added as needed
});
