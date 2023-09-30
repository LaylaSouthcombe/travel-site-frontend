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
    const image = screen.getByRole('img');
    const category = screen.getByText('Category');
    const title = screen.getByText('Article Title');
    
    expect(articleLink.getAttribute('href')).toBe('/article/1');
    expect(image.getAttribute('src')).toBe('image-url');
    expect(category).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('renders skeleton when loaded is false', () => {
    render(<ArticleListCardStyle1 loaded={false} />);
    
    const skeletonImage = screen.getByTestId('skeleton-image');
    const skeletonCategory = screen.getByTestId('skeleton-category');
    const skeletonTitle = screen.getByTestId('skeleton-title');
    
    const articleLink = screen.queryByRole('link');
    const image = screen.queryByRole('img');
    const category = screen.queryByText('Category');
    const title = screen.queryByText('Article Title');
    
    expect(articleLink).not.toBeInTheDocument();
    expect(image).not.toBeInTheDocument();
    expect(category).not.toBeInTheDocument();
    expect(title).not.toBeInTheDocument();

    expect(skeletonImage).toBeInTheDocument();
    expect(skeletonCategory).toBeInTheDocument();
    expect(skeletonTitle).toBeInTheDocument();
  });

  test('renders nothing when loaded is true and article is undefined', () => {
    render(<ArticleListCardStyle1 loaded={true} />);
    
    const skeletonImage = screen.queryByTestId('skeleton-image');
    const skeletonCategory = screen.queryByTestId('skeleton-category');
    const skeletonTitle = screen.queryByTestId('skeleton-title');

    const articleLink = screen.queryByRole('link');
    const image = screen.queryByRole('img');
    const category = screen.queryByText('Category');
    const title = screen.queryByText('Article Title');
    
    expect(articleLink).not.toBeInTheDocument();
    expect(image).not.toBeInTheDocument();
    expect(category).not.toBeInTheDocument();
    expect(title).not.toBeInTheDocument();
    
    expect(skeletonImage).not.toBeInTheDocument();
    expect(skeletonCategory).not.toBeInTheDocument();
    expect(skeletonTitle).not.toBeInTheDocument();
  });
});
