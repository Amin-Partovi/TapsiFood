# How To Start

## Docker

run the project in a Docker container, execute the following command to create an image and run a container:

```bash
docker compose up
```

Now the project is available at http://localhost:3000. If you need to stop the container, first, get a list of running containers using:

```bash
docker container ls
```

Then stop the container using:

```bash
docker stop <container-name>
```

## Package Manager

run the project with Package Manager, in the project directory, you can use yarn as the package manager. First, run:

```bash
yarn install
```

Since the data for this project is placed in a local database, you need to start the json server with the following command:

```bash
npx json-server db.json --port 3001
```

To start the local development server, use the following command:

```bash
yarn dev
```

The project will be accessible at http://localhost:3000. To build the project for production use the following command:

```bash
yarn build
```

To serve the production build, you can use the following command:

```bash
yarn start
```

Again, the project will be accessible at http://localhost:3000.

# About the project

This project is a simple shopping list application built with Next.js (version 15), TypeScript, Tanstack Query, and Tailwind CSS, designed to provide a seamless user experience on mobile devices. Users can add items to the list using an input field and button, toggle items as checked or unchecked, and remove checked items using a trash button. The application displays product images, with fallback.png used for unavailable or missing images, ensuring a polished and user-friendly interface.

# Folder Structure

```bash
.
└── src/
    ├── app
    ├── assets
    ├── components/
    │   ├── elements/
    │   │   ├── Button.tsx
    │   │   ├── Input.tsx
    │   │   ├── ...
    │   │   └── index.ts
    │   ├── fragments/
    │   │   ├── MultiSelectList.tsx
    │   │   ├── ProductCard.tsx
    │   │   ├── ...
    │   │   └── index.ts
    │   ├── icons/
    │   │   ├── TrashBinTrash.tsx
    │   │   └── index.ts
    │   └── layouts/
    │       ├── NestedLayout.tsx
    │       └── index.ts
    ├── designTokens/
    │   ├── colors.ts
    │   ├── ...
    │   └── index.ts
    ├── messages
    ├── services/
    │   ├── products/
    │   │   ├── getProducts.ts
    │   │   ├── productsQuery.ts
    │   │   └── ...
    │   └── index.ts
    └── utils/
        ├── apiRequest.ts
        ├── ...
        └── index.ts
```

src folder divided to the following modules:

elements: This folder contains shared components, also known as common components, that cannot be further divided into smaller independent components.

fragments: Fragments are reusable components that are built using elements. They combine multiple elements to form more complex and self-contained components.

layouts: components related to the layout of our application. These components define the high-level structure and positioning of other components

app: files in the app directory are the app routes organized based on the Next.js app router.

In addition to these modules, there are other ones such as utils, queries, ...

Within this structure, each module except app directory has its own index file that serves as a central point of export for all the components within that module.

# Ways To Improve

- Testing: Add unit, integration, and behavioral tests to ensure reliability.
- Rendering Performance: Use a virtualized list (e.g., react-window) for efficient rendering of large datasets.
- Paginated API: Replace fetching all products at once with a paginated API for better performance.
- Scalable Architecture: Adopt modular, feature-based architecture for future growth, though not essential for small projects.
