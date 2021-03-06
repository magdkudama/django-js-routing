import os

from setuptools import setup


try:
    readme_content = open(
        os.path.join(
            os.path.dirname(os.path.abspath(__file__)), 'README.rst'
        )
    ).read()
except IOError:
    readme_content = ''

setup(
    name='django-js-routing',
    version='1.0.4',
    url='https://github.com/magdkudama/django-js-routing',
    author='Magd Kudama',
    author_email='magdkudama@gmail.com',
    license='MIT',
    long_description=readme_content,
    keywords=['django', 'routing', 'js'],
    packages=['django_js_routing'],
    include_package_data=True,
    description='Expose your Django routes to JavaScript',
    classifiers=[
        "Development Status :: 4 - Beta",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python",
        "Operating System :: OS Independent",
        "Topic :: Software Development",
        "Topic :: Utilities",
        "Environment :: Web Environment",
        "Framework :: Django",
    ],
)
